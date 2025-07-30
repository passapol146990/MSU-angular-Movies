import json,random

path = "D:/GITHUB/MSU-angular-Movies/src/app/services/json/"
input_path = path+"Movies.json"
with open(input_path, "r", encoding="utf-8") as f:
    movies = json.load(f)

for movie in movies:
    creator_dict = movie["creator"]
    for c in creator_dict:
        c["age"] = random.choice([22,23,24,25,26,27,30,33,35])
output_path = path+"Movies_fixed.json"
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(movies, f, ensure_ascii=False, indent=2)
