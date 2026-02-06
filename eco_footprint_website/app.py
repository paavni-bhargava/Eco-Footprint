from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html", active="home")

@app.route("/assessment", methods=["GET", "POST"])
def assessment():
    if request.method == "POST":
        electricity = int(request.form["electricity"])
        transport = int(request.form["transport"])
        food = int(request.form["food"])

        total = electricity + transport + food

        if total < 200:
            status = "Eco Friendly 🌱"
        elif total < 400:
            status = "Moderate ⚠️"
        else:
            status = "High Carbon Usage 🚨"

        return render_template(
            "result.html",
            electricity=electricity,
            transport=transport,
            food=food,
            total=total,
            status=status,
            active="assessment"
        )

    return render_template("assessment.html", active="assessment")

@app.route("/contact")
def contact():
    return render_template("contact.html", active="contact")

if __name__ == "__main__":
    app.run(debug=True)
