import base64

with open("C:/Users/danie/OneDrive/Work/Career/Coding/Folio/Sportsbet notification engine/assets/sb-logo.png", "rb") as img_file:
    base64_string = base64.b64encode(img_file.read()).decode("utf-8")

print(base64_string)  # Copy this output for the next step