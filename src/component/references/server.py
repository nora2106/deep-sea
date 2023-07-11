from flask import Flask
import datetime
x = datetime.datetime.now()
app = Flask(__name__)
import requests
import random
from fathomnet.api import images, boundingboxes, taxa
from array import *

all_concepts = boundingboxes.find_concepts()
# squid = images.find_by_concept("Vampyroteuthis infernalis")[1]
randomC = random.choice(all_concepts)
# get random concept
def getRandom():
#     randomC = random.choice(all_concepts)
    # check if api returns error
    def checkApi(url):
            global randomC
#             print(randomC)
            if(url.status_code == 500):
                while(url.status_code == 500):
                    print("error")
                    new_random = random.choice(all_concepts)
                    newUrl = 'http://fathomnet.org:8080/taxa/query/mbari/' + new_random.replace(" ", "%20")
                    print(newUrl)
                    url = requests.get(newUrl)
                    randomC = new_random

#             else:
#                 print('correct!')
#             print(randomC)
         #check if concept is species
    def checkRank():
#             print('checking')
            if(taxa.find_taxa('mbari', randomC)[0].rank != "species" or taxa.find_taxa('mbari', randomC)[0].rank is None):
                while(taxa.find_taxa('mbari', randomC)[0].rank != "species" or taxa.find_taxa('mbari', randomC)[0].rank is None):
                    new_random = random.choice(all_concepts)
                    randomC = new_random
                    newUrl = 'http://fathomnet.org:8080/taxa/query/mbari/' + new_random.replace(" ", "%20")
                    checkApi(newUrl)
    url = 'http://fathomnet.org:8080/taxa/query/mbari/' + randomC.replace(" ", "%20")
    print(url)
    x = requests.get(url)
    checkApi(x)
    result = randomC
    return result

def loopTaxa(conc):
    loop = taxa.find_parent('mbari', conc)
    count = 0
#     taxaArray = ("test": "testData", "test2": "test2Data")
    while(loop.rank != 'kingdom'):
        print(str(loop.rank) + ': ' + str(loop.name))
#         taxaArray.append(str(loop.rank):, str(loop.name))
        count += 1
        loop = taxa.find_parent('mbari', loop.name)
#     print(taxaArray)
#     print(taxa.find_parent('mbari', loop.name).rank)

# def compareTaxa(concept1, concept2):

first_random = getRandom()
print(first_random)
loopTaxa(first_random)
# count = loopTaxa(first_random)
# print(count)


@app.route('/data')
def get_time():

    # Returning an api for showing in  reactjs
    return {
        'First Animal'
#         'Rank': rank,
#         'Second Animal': second_random,
#         'Taxa': taxa1.rank
#         'Taxa Index': index
        }


# Running app
if __name__ == '__main__':
    app.run(debug=True)
