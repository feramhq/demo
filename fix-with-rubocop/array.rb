def error_message
  puts 'An error occured.'
end

def reset_array(array)
  print(array.pop, ' ') until array.empty?
  print "\n"
end

reset_array(%w[T E S T])
