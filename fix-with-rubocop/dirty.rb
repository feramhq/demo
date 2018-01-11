def dirty_method
   puts "incorrect number of spaces (3)"
end

#emptying array can be improved by using until
test_array = [ 'T', 'E', 'S', 'T' ]
print(test_array.pop, " ") while test_array.size > 0
print "\n"
