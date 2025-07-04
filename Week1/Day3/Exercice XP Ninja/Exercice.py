class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        log = f"{self.phone_number} called {other_phone.phone_number}"
        print(log)
        self.call_history.append(log)

    def show_call_history(self):
        print(f"\n Call history for {self.phone_number}:")
        for call in self.call_history:
            print(call)

    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)
        other_phone.messages.append(message)

    def show_outgoing_messages(self):
        print(f"\nOutgoing messages from {self.phone_number}:")
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(f"To {msg['to']}: {msg['content']}")

    def show_incoming_messages(self):
        print(f"\n Incoming messages to {self.phone_number}:")
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(f"From {msg['from']}: {msg['content']}")

    def show_messages_from(self, number):
        print(f"\n Messages from {number} to {self.phone_number}:")
        for msg in self.messages:
            if msg["from"] == number and msg["to"] == self.phone_number:
                print(f"From {msg['from']}: {msg['content']}")
