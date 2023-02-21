package main

func grayCode(n int) []int {
	result := make([]int, 1<<uint(n))
	for i := 1; i < len(result); i++ {
		result[i] = i ^ (i >> 1)
	}
	return result
}

func main() {
	grayCode(0)
	grayCode(1)
	grayCode(2)
	grayCode(3)
	grayCode(16)
}
