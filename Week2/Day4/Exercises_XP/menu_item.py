import psycopg2


class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        try:
            connection = psycopg2.connect(
                database="Restaurant_Menu_Manager",
                user="postgres",
                password="meryem",
                host="localhost",
                port="5432"
            )
            cursor = connection.cursor()
            cursor.execute(
                "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)",
                (self.name, self.price)
            )
            connection.commit()
            print("Item saved successfully.")
        except Exception as e:
            print("Error while saving item:", e)
        finally:
            if cursor:
                cursor.close()
            if connection:
                connection.close()
    def delete(self):
        try:
            connection=psycopg2.connect(database="Restaurant_Menu_Manager",
                user="postgres",
                password="meryem",
                host="localhost",
                port="5432")
            cursor=connection.cursor()
            cursor.execute(
                 "DELETE FROM Menu_Items WHERE item_name = %s AND item_price = %s",
                (self.name, self.price)
            )
            connection.commit()
            print("Item deleted successfully.")
        except Exception as e:
            print("Error while deleting item :",e)
        finally:
            if cursor:
                cursor.close()
            if connection:
                connection.close()
    def update(self ,new_name,new_price):
        try:
          connection=psycopg2.connect(database="Restaurant_Menu_Manager",
                user="postgres",
                password="meryem",
                host="localhost",
                port="5432")
          cursor=connection.cursor()
          cursor.execute(
                "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s AND item_price = %s",
                (new_name, new_price, self.name, self.price)
          )
          connection.commit() 
        #   self.name = new_name
        #   self.price = new_price
          print("Item Updated successfuly .")
        
        except Exception as e:
            print("Error while Updating item :",e)
        finally:
            if cursor:
                cursor.close()
            if connection:
                connection.close()

if __name__ == "__main__":
    try:
        item = MenuItem("Burger", 8)
        # item.save()
        # item.delete()
        item.update('ttttt',10)
        
        # item2 = MenuManager.get_by_name('Beef Stew')
        # items = MenuManager.all()
        
    except Exception as e:
        print("Something went wrong:", e)
