#!/usr/bin/env python

import os
import xml.etree.ElementTree as ET
from xml.dom import minidom
import urllib,urllib2
import threading
import csv
import time
import random

urlget=1
threshold=1000
time_id=0
last_id=0
appliance_data = ['microwave', 'fridge', 'oven', 'dishwasher', 'stove']
apps = []
CSV_FILE = '../../data/ApplianceData3.csv'


class Appliance:
    name = ""
    energy = 0.0
    power = 0.0

    def __init__(self, name, energy, power):
        self.name = name
        self.energy = energy
        self.power = power


for x in range(0,len(appliance_data)):
    cur_app = Appliance(appliance_data[x], 0.0, 0.0)
    apps.append(cur_app)


def writeCSV():
    with open(CSV_FILE, 'wb') as csvfile:
        writer = csv.writer(csvfile, delimiter=',',
                            quotechar=',', quoting=csv.QUOTE_MINIMAL)
        writer.writerow(['Appliance'] + ['Energy'] + ['Power'])
        num_app = random.randint(0,4)
        if(apps[num_app].energy == 0.0):
            apps[num_app].energy = float(random.randint(-500.0,0.0))
            apps[num_app].power = float(random.randint(0.0,100.0))
        else:
            apps[num_app].energy = 0.0
            apps[num_app].power = 0.0
        for x in range(0,len(appliance_data)):
            writer.writerow([apps[x].name] + [apps[x].energy] + [apps[x].power])
            print apps[x].name, apps[x].energy, apps[x].power

while (True):
    writeCSV()
    time.sleep(10)
