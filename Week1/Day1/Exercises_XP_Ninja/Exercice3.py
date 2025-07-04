import re

paragraph = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit. 
Vivamus commodo leo vitae arcu tincidunt suscipit.
Pellentesque venenatis ultrices ante eget dignissim.
"""

total_chars = len(paragraph)
print(f"Total de caractères : {total_chars}")

sentences = re.split(r'[.!?]+', paragraph)
sentences = [sentence.strip() for sentence in sentences if sentence.strip() != ""]
print("Nombre de phrases :", len(sentences))


words = re.findall(r'\b\w+\b', paragraph.lower())  # on utilise une regex pour éviter la ponctuation
nb_words = len(words)
print(f"Nombre de mots : {nb_words}")

unique_words = set(words)
print(f"Nombre de mots uniques : {len(unique_words)}")


non_whitespace_chars = len(''.join(paragraph.split()))
print(f"Nombre de caractères non-blancs : {non_whitespace_chars}")


avg_words_per_sentence = nb_words / len(sentences) if len(sentences) > 0 else 0
print(f"Moyenne de mots par phrase : {avg_words_per_sentence:.2f}")


from collections import Counter
word_counts = Counter(words)
non_unique_count = sum(1 for word, count in word_counts.items() if count > 1)
print(f"Nombre de mots non-uniques : {non_unique_count}")
