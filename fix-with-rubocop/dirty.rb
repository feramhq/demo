def error_message
   puts "An error occured."
end

def reset_array(array)
  print(array.pop, " ") while array.size > 0
  print "\n"
end

reset_array([ 'T', 'E', 'S', 'T' ])
