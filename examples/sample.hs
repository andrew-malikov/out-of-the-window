-- Haskell sample
module Main where

import Data.List (foldl')

data User = User
  { userId :: Int
  , userName :: String
  } deriving (Show, Eq)

score :: [Int] -> Double
score xs =
  let total = foldl' (+) 0 xs
      count = length xs
  in if count == 0 then 0 else fromIntegral total / fromIntegral count

formatUser :: User -> String
formatUser u = "#" ++ show (userId u) ++ " " ++ userName u

main :: IO ()
main = do
  let u = User 1 "andrew"
  putStrLn (formatUser u)
  print (score [1, 2, 3, 4])
