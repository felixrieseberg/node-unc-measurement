# node-unc-measurement
:microscope: Small script to measure the performance of UNC paths

```
npm install -g unc-performance-test
unc-performance-test 10000
```

The script will run and print out how long it took to write and read a file (synchronously) using either "normal" paths (`C:\myfile.txt`) or UNC paths (`\\?\C:\myfile.txt`).

```
C:\Users\feriese\Code\node-unc-measurement [master ≡]> unc-performance-test 20000
Reading and writing a file 20000 times:
With "normal" paths:      24.319
With UNC paths:           24.706
```