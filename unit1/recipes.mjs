const cookies = 
[
    {
        "RECIPE_NAME": "Chocolate Chip Cookies",
        "IMAGE": "https:bit.ly/3BiUeFe",
        "TYPE": "traditional",
        "INGREDIENTS": 
            {
                "NAME": "Butter",
                "AMOUNT": "1",
                "UNIT": "lb"
            },
        "STEPS": [
            "awjhbfowuefb",
            "lerfble"
        ]
    },
    {
        "RECIPE_NAME": "Chocolate Cookies",
        "IMAGE": "https:bit.ly/3TF6ypg",
        "TYPE": "non-traditional",
        "INGREDIENTS": 
        {
            "NAME": "Cocoa",
            "AMOUNT": "1",
            "UNIT": "cup"
        },
        "STEPS": [
        "awjhbfowuefb", 
        "wieubfiq;bewf"
        ]   
    }
]

export function getRecipes() {
    return cookies;
}
