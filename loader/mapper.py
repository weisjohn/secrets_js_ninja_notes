#
# mapper.py
#
# This script is used to generate a JSON object which is the mapping of 
# existing .js files in a structure, so that the runner can go and grab the code
# 
# basic JSON structure
'''
    overcome_xhr_local({
        
        'chapters' : {
            '1' : {
                'sections' : {
                    '4' : {
                        'files' : { 
                            '0' : '1',
                            '1' : '2',
                        }
                    }
                } 
            },
            '2' : {
                'sections' : {
                    '3' : {
                        'files' : { 
                            '0' : '2',
                            '1' : '4',
                        }
                    }
                } 
            }
        }
        
    });
'''

import os 

# this traverses the file structure to see if those files are there...
# finds only the files that in the proper place 
dirname = '..\\code\\'
for chapter in os.listdir(dirname):    
    for section in os.listdir(os.path.join(dirname, chapter)):
            for file in os.listdir(os.path.join(dirname,chapter,section)):
                 if os.path.isfile(os.path.join(dirname, chapter, section, file)):
                     a = 5
                     #print os.path.join(dirname, chapter, section, file) 




for chapter in os.listdir(dirname):
    for section in os.listdir(os.path.join(dirname, chapter)):
            for file in os.listdir(os.path.join(dirname,chapter,section)):
                 if os.path.isfile(os.path.join(dirname, chapter, section, file)):
                     print os.path.join(dirname, chapter, section, file) 

       
       
       
       
       
       
       
       