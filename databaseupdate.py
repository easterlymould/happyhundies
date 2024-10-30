import pandas as pd
import sqlite3

# Define the path to your CSV file and SQLite database
CSV_FILE_PATH = 'hhdata.csv'
DATABASE_PATH = 'HHActualTest.db'
TABLE_NAME = 'hhdata'

# Function to update the SQLite database based on the CSV file
def update_database_from_csv(csv_file_path, database_path):
    # Connect to the SQLite database
    conn = sqlite3.connect(database_path)
    cursor = conn.cursor()

    # Read the CSV file into a pandas DataFrame
    df = pd.read_csv(csv_file_path)

    # Ensure the IMDBScore column is treated as float
    if 'IMDBScore' in df.columns:
        df['IMDBScore'] = df['IMDBScore'].astype(float)

    # Drop the existing table if it exists
    cursor.execute(f"DROP TABLE IF EXISTS {TABLE_NAME}")

    # Create the table with the same schema including the new TMDBkey column
    create_table_query = f"""
    CREATE TABLE {TABLE_NAME} (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Name TEXT,
        Year INTEGER,
        Runtime INTEGER,
        Genre TEXT,
        Language TEXT,
        IMDBScore REAL,
        Comment TEXT,
        Link TEXT,
        TMDBkey TEXT
    )
    """
    cursor.execute(create_table_query)

    # Insert the data from the DataFrame into the SQLite table
    df.to_sql(TABLE_NAME, conn, if_exists='append', index=False)

    # Commit the transaction and close the connection
    conn.commit()
    conn.close()

# Call the function to update the database
update_database_from_csv(CSV_FILE_PATH, DATABASE_PATH)
