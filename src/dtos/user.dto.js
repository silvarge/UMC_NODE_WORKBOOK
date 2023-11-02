// sign in response DTO
export const signinResponseDTO = (user, prefer) => {

    const preferFood = [];

    for (let i = 0; i < prefer.length; i++) {
        preferFood.push(prefer[0][i].f_category_name);
    }

    return {"email": user[0].email, "name": user[0].user_name, "preferCategory": preferFood};
}