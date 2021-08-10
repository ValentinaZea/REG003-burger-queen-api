CREATE TABLE p_product_type (
	product_id INTEGER REFERENCES product(id) ON DELETE CASCADE,
    type_id INTEGER REFERENCES product_type(id) ON DELETE CASCADE,
    PRIMARY KEY (product_id, type_id)
);

ALTER TABLE role RENAME COLUMN role_id TO id;

INSERT INTO orders (user_id, client, products, status) VALUES (1, 'Milucita', '[{"id":1, "qty": 2},{"id":2, "qty":2},{"id":13, "qty": 1}]' , 'pending');
('Bebida/Gaseosa 500m', 7, 'https://porter.com.py/image/cache/catalog/784/7840058/7840058000019-500x500h-jpg.webp'),
('Bebida/Gaseosa 750ml', 10, 'https://tpvabarrotesaurora.oo.gd/wp-content/uploads/2019/02/79af437311ea7776786fb9c2a9321490.jpg');

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    user_id INT,
    client VARCHAR,
    products JSON,
    status VARCHAR,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id) 
	    REFERENCES users(id)
	    ON DELETE SET NULL
);

UPDATE product SET dateentry = current_timestamp WHERE id=2;

DELETE FROM product WHERE id=16;
/* --------- COMANDS FOR LOGIN TO DB --------------
docker ps -a --> Listar todos los servicios
docker exec -it 66523fbebcec bash
psql -U <db_user>