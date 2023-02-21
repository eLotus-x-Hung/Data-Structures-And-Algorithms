package main

func findLength(nums1 []int, nums2 []int) int {
	n, m := len(nums1), len(nums2)
	dp := make([][]int, n+1)
	for i := range dp {
		dp[i] = make([]int, m+1)
	}
	maxLength := 0
	for i := 1; i <= n; i++ {
		for j := 1; j <= m; j++ {
			if nums1[i-1] == nums2[j-1] {
				dp[i][j] = dp[i-1][j-1] + 1
				if dp[i][j] > maxLength {
					maxLength = dp[i][j]
				}
			}
		}
	}
	return maxLength
}

func main() {
	findLength([]int{0}, []int{1})
	findLength([]int{0}, []int{0})
	findLength([]int{1, 2, 3, 2, 1}, []int{3, 2, 1, 4, 7})
	findLength([]int{0, 0, 0, 0, 0}, []int{0, 0, 0, 0, 0})
	findLength([]int{3, 4, 5, 6, 7, 8, 9}, []int{5, 5, 6, 7, 8, 9, 10})
}
