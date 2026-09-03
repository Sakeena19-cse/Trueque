from skills.models import UserSkill
from django.contrib.auth.models import User


def find_direct_matches(user):
    """
    Direct match: User A wants Skill X, User B offers Skill X,
    AND User B wants Skill Y that User A offers.
    """
    my_wants = UserSkill.objects.filter(user=user, skill_type='wanting')
    my_offers = UserSkill.objects.filter(user=user, skill_type='offering')

    my_offer_skill_ids = set(my_offers.values_list('skill_id', flat=True))
    matches = []

    for want in my_wants:
        # find people offering the skill I want
        offerers = UserSkill.objects.filter(
            skill=want.skill, skill_type='offering'
        ).exclude(user=user)

        for offer in offerers:
            # check if that person wants something I offer
            their_wants = UserSkill.objects.filter(
                user=offer.user, skill_type='wanting', skill_id__in=my_offer_skill_ids
            )
            for their_want in their_wants:
                matches.append({
                    'other_user': offer.user,
                    'my_offer_skill': their_want.skill,
                    'their_offer_skill': offer.skill,
                    'my_userskill': UserSkill.objects.get(user=user, skill=their_want.skill, skill_type='offering'),
                    'their_userskill': offer,
                })
    return matches


def find_chain_matches(user, max_depth=3):
    """
    Chain match: A wants X (B offers X), B wants Y (C offers Y), C wants Z (A offers Z).
    Uses BFS to find cycles up to max_depth.
    """
    chains = []
    my_offers = set(UserSkill.objects.filter(user=user, skill_type='offering').values_list('skill_id', flat=True))
    my_wants = UserSkill.objects.filter(user=user, skill_type='wanting')

    for want in my_wants:
        # start BFS: path is list of (user, skill_taken)
        queue = [[(user, want.skill)]]
        visited_users = {user.id}

        while queue:
            path = queue.pop(0)
            if len(path) > max_depth:
                continue

            last_user, last_skill = path[-1]
            offerers = UserSkill.objects.filter(
                skill=last_skill, skill_type='offering'
            ).exclude(user__in=visited_users)

            for offer in offerers:
                next_user = offer.user
                # does next_user want something in my_offers? -> chain closes
                closing_want = UserSkill.objects.filter(
                    user=next_user, skill_type='wanting', skill_id__in=my_offers
                ).first()

                if closing_want:
                    chains.append(path + [(next_user, closing_want.skill)])
                else:
                    # continue the chain
                    next_wants = UserSkill.objects.filter(user=next_user, skill_type='wanting')
                    for nw in next_wants:
                        new_path = path + [(next_user, nw.skill)]
                        queue.append(new_path)
                    visited_users.add(next_user.id)

    return chains