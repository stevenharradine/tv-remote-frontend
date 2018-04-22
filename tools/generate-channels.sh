#
# Usage: ./generate-channels.sh input.txt
# Input file: new line delimited format such that:
#   channel_name1
#   channel_number1
#   channel_name2
#   channel_number2
#
# Notes: You need to delete the last ",{" which is not accounted for in this script. 
#
echo "var channels = [{"
while IFS='' read -r line || [[ -n "$line" ]]; do
	echo '  "name": "'$line'"',
	read -r line
	echo '  "channel": "'$line'"',
	echo '  "category": ""'
	echo '},{'
done < "$1"
echo "]"