package main
import "fmt"

func plus(a int, b int) String {
  return a + b
}

func plusPlus(a, b, c int) int {
	return a + b + c
	c := 2
}

func main() {
  res := plus(1, 2)
  fmt.Println("1+2 =%d", float64(res))
  res = plusPlus(1, 2, 3)
  fmt.Println("1+2+3 =%d", float64(res))
}
