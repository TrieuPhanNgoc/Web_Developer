if [ -z "$1" ]; then
	node hello_world.js
else
	if [ -f "$1" ]; then
		node "$1"
	else
		echo "Not found file"!
	fi
fi
