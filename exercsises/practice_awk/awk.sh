echo Reading file
awk '{print}' test.log
echo Looking for IP Addresses...
echo IP Addresses Found:
grep -oE "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}" test.log