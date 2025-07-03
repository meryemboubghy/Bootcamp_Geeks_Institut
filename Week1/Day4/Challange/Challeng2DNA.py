import random

class Gene:
    def __init__(self, value=None):
        self.value = value if value is not None else random.randint(0, 1)

    def mutate(self):
        
        self.value = 1 - self.value

    def __repr__(self):
        return str(self.value)
class Chromosome:
    def __init__(self, genes=None):
        self.genes = genes if genes else [Gene() for _ in range(10)]

    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5:  
                gene.mutate()

    def is_all_ones(self):
        return all(gene.value == 1 for gene in self.genes)

    def __repr__(self):
        return ''.join(str(gene) for gene in self.genes)


class DNA:
    def __init__(self, chromosomes=None):
        self.chromosomes = chromosomes if chromosomes else [Chromosome() for _ in range(10)]

    def mutate(self):
        for chromosome in self.chromosomes:
            if random.random() < 0.5:  
                chromosome.mutate()

    def is_perfect(self):
        return all(chromosome.is_all_ones() for chromosome in self.chromosomes)

    def __repr__(self):
        return '\n'.join(str(chrom) for chrom in self.chromosomes)


class Organism:
    def __init__(self, dna=None, environment=0.1):
        self.dna = dna if dna else DNA()
        self.environment = environment

    def mutate(self):
        if random.random() < self.environment:
            self.dna.mutate()

    def is_perfect(self):
        return self.dna.is_perfect()


def simulate_evolution(environment=0.1):
    generations = 0
    organism = Organism(environment=environment)

    while not organism.is_perfect():
        organism.mutate()
        generations += 1
        if generations % 1000 == 0:
            print(f"Generation {generations}... still evolving.")

    print(f"Perfect organism achieved in {generations} generations!")
    return generations


if __name__ == "__main__":
    simulate_evolution(environment=0.2)
