import json
import random

path = "D:/GITHUB/MSU-angular-Movies/src/app/services/json/"
input_path = path+"Movies.json"
with open(input_path, "r", encoding="utf-8") as f:
    movies = json.load(f)

for movie in movies:
    creator_dict = movie["creator"]
    for c in creator_dict:
        # c["age"] = random.choice([22,23,24,25,26,27,30,33,35])
        c["video"] = "https://www.youtube.com/embed/Pj-2KzHjjD0?si=9MmmoftHleZqKo4J"


# import json
# import os

# path = "D:/GITHUB/MSU-angular-Movies/src/app/services/json/"
# input_path = os.path.join(path, "Movies.json")

# with open(input_path, "r", encoding="utf-8") as f:
#     movies = json.load(f)

# def assign_genre(movie):
#     name = movie["name"].lower()
#     detail = movie["detail"].lower()
#     if "anime" in detail or "animated" in detail or "animation" in detail or "pixar" in detail:
#         return "Animation"
#     if "musical" in detail or "broadway" in detail:
#         return "Musical"
#     if "spy" in detail or "conspiracy" in detail:
#         return "Thriller"
#     if "war" in detail or "tolkein" in detail or "fantasy" in detail:
#         return "Fantasy"
#     if "game" in name or "squid" in name:
#         return "Action"
#     if "moana" in name or "disney" in detail:
#         return "Adventure"
#     if "wicked" in name:
#         return "Fantasy"
#     return "Drama"

# for movie in movies:
#     movie["genre"] = assign_genre(movie)

output_path = path+"Movies_fixed.json"
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(movies, f, ensure_ascii=False, indent=2)
