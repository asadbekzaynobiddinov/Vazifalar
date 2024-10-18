import { json } from "express";
import fs from "node:fs";

export const readUsersDB = (url) => {
	const data = fs.readFileSync(url, "utf8");

	if (data) {
		const users = JSON.parse(data);
		return users;
	} else {
		return [];
	}
};

export const writeUsersDB = (url, users) => {
	fs.writeFileSync(url, JSON.stringify(users));
};

export const readDebtDb = (url) => {
	const data = fs.readFileSync(url, "utf8")
	if(data){
		const debts = JSON.parse(data)
		return debts
	}else{
		return []
	}
}

export const writeDebtDb = (url, data) => {
	fs.writeFileSync(url, JSON.stringify(data))
}