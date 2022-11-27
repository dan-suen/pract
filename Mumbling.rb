# This time no story, no theory. The examples below show you how to write function accum:

# Examples:
# accum("abcd") -> "A-Bb-Ccc-Dddd"
# accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
# accum("cwAt") -> "C-Ww-Aaa-Tttt"
# The parameter of accum is a string which includes only letters from a..z and A..Z.

def accum(s)
	array = []
  i = 0
  while i < s.length
    array.push((s.chars[i])*(i+1))
    i += 1
  end
  results = array.map{|n| n.capitalize}.join("-")
end



# sample answer using with index instead
# def accum(s)
# 	s.chars.map.with_index { |char,index| (char*(index+1)).capitalize }.join("-")
# end