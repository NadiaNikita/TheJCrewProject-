DROP DATABASE IF EXISTS wine_pairing;
CREATE DATABASE wine_pairing;

use wine_pairing;

CREATE TABLE wine_foods(
	wine_id int NOT NULL, 
	wine_class varchar(25) NOT NULL,
	food_category varchar(25) NOT NULL,
	food_class varchar(25) NOT NULL,
    food_name varchar(25) NOT NULL
    
);

use wine_pairing;


CREATE TABLE wine_bottle(
	wine_id int NOT NULL, 
	wine_class varchar(25) NOT NULL,
    wine_name varchar(25) NOT NULL,
	wine_bottle varchar(255) NOT NULL
);

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;
