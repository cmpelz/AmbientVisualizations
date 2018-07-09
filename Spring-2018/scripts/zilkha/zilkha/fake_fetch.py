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
CSV_FILE = '../../data/ApplianceData2.csv'


def writeCSV():
    with open(CSV_FILE, 'wb') as csvfile:
        writer = csv.writer(csvfile, delimiter=',',
                            quotechar=',', quoting=csv.QUOTE_MINIMAL)
        writer.writerow(['Appliance'] + ['Energy'] + ['Power'])
        for x in range(0,len(appliance_data)):
            appliance_name = appliance_data[x]
            energy = float(random.randint(-500.0,0.0))
            power = float(random.randint(0.0,100.0))
            writer.writerow([appliance_name] + [energy] + [power])
            print appliance_name, energy, power
while (True):
    writeCSV()
    time.sleep(10)
