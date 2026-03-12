// Go sample
package main

import (
	"fmt"
	"strings"
)

type User struct {
	ID   int
	Name string
}

func Format(users []User) string {
	parts := make([]string, 0, len(users))
	for _, u := range users {
		parts = append(parts, fmt.Sprintf("%d:%s", u.ID, strings.ToUpper(u.Name)))
	}
	return strings.Join(parts, ", ")
}

func main() {
	fmt.Println(Format([]User{{ID: 1, Name: "ava"}, {ID: 2, Name: "liam"}}))
}
