import os
import subprocess
cmd = input()
os.system(cmd)
subprocess.Popen(cmd, shell=True)
