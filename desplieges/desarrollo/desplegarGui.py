import compileall
import os, shutil, glob
from distutils.dir_util import copy_tree


compileall.compile_dir("./GUI/", legacy=True, force=True)

origen = "GUI/"
## Edit this

destino = "Orquestador/front/"
## Edit this

try:
    os.makedirs(destino)
    ## it creates the destination folder
except:
    pass

for parent, dirnames, filenames in os.walk(destino):
    for fn in filenames:
        if fn.lower().endswith(".pyc"):
            os.remove(os.path.join(parent, fn))

for compilado in glob.glob(origen + "/*.pyc"):
    shutil.move(compilado, destino)

# Movimiento de templates
copy_tree(origen + "/templates", destino + "templates/")
