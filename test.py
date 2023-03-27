import unittest
from whiteboard import solution
from unittest import TestCase


class TestRunningSum(TestCase):

    def test_positive_palindrome(self):
        self.assertEqual(solution(121), True)

    def test_negative_palindrome(self):
        self.assertEqual(solution(-121), False)

    def test_not_palindrome(self):
        self.assertEqual(solution(10), False)

    def test_zero(self):
        self.assertEqual(solution(-101), False)
        
    def test_large_palindrome(self):
        self.assertEqual(solution(1234554321), True)

    def test_large_not_palindrome(self):
        self.assertEqual(solution(123456789), False)
