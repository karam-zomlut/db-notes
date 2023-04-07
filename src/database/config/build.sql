BEGIN;

DROP TABLE IF EXISTS notes, tags;

CREATE TABLE
    notes (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NUll,
        content TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    tags (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        note_id INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (note_id) REFERENCES notes(id) ON DELETE CASCADE ON UPDATE CASCADE
    );

INSERT INTO
    notes(title, content)
VALUES (
        'First note',
        'First note content'
    ), (
        'Second note',
        'Second note content'
    );

INSERT INTO tags(name, note_id) VALUES ('tag1', 1), ('tag2', 2);

COMMIT;

-- C:\Users\KARAM\Desktop\amal\src\database\config\build.sql