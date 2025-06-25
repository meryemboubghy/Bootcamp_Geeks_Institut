import math
import turtle

class Circle:
    def __init__(self, rayon):
        self.rayon = rayon

    @property
    def diametre(self):
        return self.rayon * 2

    def aire(self):
        return math.pi * (self.rayon ** 2)

    def __str__(self):
        return f"Cercle avec un rayon de {self.rayon} et une aire de {self.aire():.2f}"

    def __add__(self, autre):
        if isinstance(autre, Circle):
            new_rayon = self.rayon + autre.rayon
            return Circle(new_rayon)
        raise TypeError("On peut seulement ajouter deux cercles.")

    def __lt__(self, autre):
        if isinstance(autre, Circle):
            return self.rayon < autre.rayon
        return NotImplemented

    def __eq__(self, autre):
        if isinstance(autre, Circle):
            return self.rayon == autre.rayon
        return NotImplemented


# Fonction pour dessiner les cercles triés
def dessiner_cercles(cercles):
    t = turtle.Turtle()
    t.speed(1)
    t.penup()
    x = -200

    for cercle in cercles:
        t.goto(x, 0)
        t.pendown()
        t.circle(cercle.rayon * 10)
        t.penup()
        x += (cercle.rayon * 20) + 20

    turtle.done()


# Exemple d'utilisation
cercles = [Circle(3), Circle(5), Circle(2)]
cercles_triees = sorted(cercles)

for c in cercles_triees:
    print(c)

dessiner_cercles(cercles_triees)
