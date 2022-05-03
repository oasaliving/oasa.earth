rsync -avzP ~/Code/app.closer.earth/* crocodile:/var/app/oasa.earth --exclude=.git --exclude=.next --exclude=node_modules --exclude=.local;
rsync -avzP ~/Code/oasa.earth/* crocodile:/var/app/oasa.earth --exclude=.git --exclude=.next --exclude=node_modules --exclude=.local;
ssh crocodile "cd /var/app/oasa.earth; npm i; node ./scripts/update_package.js; npm run build; pm2 restart oasa.earth;";
