# node-unc-measurement
:microscope: Small script to measure the performance of UNC paths

```
npm install -g unc-performance-test
unc-performance-test 10000
```

The script will run and print out how long it took to write and read a file (synchronously) using either "normal" paths (`C:\myfile.txt`) or UNC paths (`\\?\C:\myfile.txt`).