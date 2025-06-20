class Song():
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):  
        for line in self.lyrics:
            print(line)

stairway = Song([
    "There’s a lady who's sure", 
    "All that glitters is gold", 
    "And she’s buying a stairway to heaven"
])

stairway.sing_me_a_song()
