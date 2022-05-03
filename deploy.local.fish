rsync -avzP ~/Code/app.closer.earth/* ~/Code/oasa.earth/.local --exclude=.git --exclude=.next --exclude=node_modules --exclude=.local;
rsync -avzP ~/Code/oasa.earth/* ~/Code/oasa.earth/.local --exclude=.git --exclude=.next --exclude=node_modules --exclude=.local;
cd ~/Code/oasa.earth/.local;
node ./scripts/update_package.js;
cd ~/Code/oasa.earth/;
