chute=0
while chute=certo:
    chute=int(input("digite um numero de 1 a 100"))
    certo=1<=chute<=100
    print(chute)
    if chute!=certo:
        print("naoo")

chute = 0
while True:
    chute = int(input("Digite um número de 1 a 100: "))

    if 1 <= chute <= 100:
        print(f"Você digitou: {chute}")
        break  # Sai do loop se o número estiver no intervalo
    else:
        print("Número inválido! Tente novamente.")
