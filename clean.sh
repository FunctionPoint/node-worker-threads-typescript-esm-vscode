#!/bin/bash
# This script removes all installed / compiled / generated artifacts for this project.
# and remove installed NPM modules. To restore: npm install

# Change to script folder.
cd "$(dirname "$0")"

echo "Cleaning..."

rm -fr ./out
rm -fr ./node_modules
