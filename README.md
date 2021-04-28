# BR_sales_floor_loop_up
search for items on the sales floor
Front end 
  seach bar to take SKU input
  return 
    1. display style
    2. location and sub location (ex: Man's 3, piprack)
App
  Top bar
    search bar
      input
        drop down
      search butoon 
    (manue butoon)
  Item Info
    location Info
      sales floor location 
      section location
    display Info
      display style
      display style detail

API

get item info
  input : SKU
  output: item location & display info || Online? clearance? no input
get IDs (auto populate feature)
  input : partial number
  output : list of nubmer that has the same number starting
patch (attribute) (input)
  input : target id, new attribut
  output : new item id, new atribute (same return as get item Info)
delete 
  input : target ID
  output : remove confirmation

Data base

SKU(index)
display style (fold/hung)
display style (open, front fold, hald fold, )
location (man's 2)
location (piprack wall 1)
input timestamp
lates update time
