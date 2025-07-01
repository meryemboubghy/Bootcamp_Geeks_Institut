import psycopg2
from menu_item import MenuItem


class MenuManager:
  @classmethod
  def get_by_name(cls,name):
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
               "SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s",(name ,)
        )
        result = cursor.fetchone()
        if result:
            return MenuItem(result[0],result[1])
        else:
            return None
      except Exception as e:
        print("Error while fetching item by name:", e)
        return None
      finally:
            if cursor:
                cursor.close()
            if connection:
                connection.close()   
  @classmethod
  def all_items(cls):
      try:
        connection = psycopg2.connect(
               database="Restaurant_Menu_Manager",
                user="postgres",
                password="meryem",
                host="localhost",
                port="5432"
        )
        cursor = connection.cursor()
        cursor.execute("SELECT item_name, item_price FROM Menu_Items")
        results = cursor.fetchall()
        items = [MenuItem(name, price) for name, price in results]
        return items
      except Exception as e:
        print("Error while fetching all items:", e)
        return []
      finally:
            if cursor:
                cursor.close()
            if connection:
                connection.close()

        
              
if __name__ == "__main__":
    item = MenuManager.get_by_name("Burger")
    if item:
        print(f"Item found: {item.name} - {item.price} MAD")
    else:
        print("Item not found.")