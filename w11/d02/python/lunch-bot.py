import random

restaurant_list = ["Lemonade", "Chipotle", "Potbelly's", "King Taco", "In and Out", "Subway", "Sharky's"]

random.shuffle(restaurant_list)
for item in restaurant_list:
    print item

def lunch_spot_algorithm (list):
    random.shuffle(list)
    visited_array = []
    for item in list:
        random.shuffle(list)
        visited_array.append(item)
        
        if len(visited_array) > 3:
            list.append
