MyData <- read.csv(file="C:\\Users\\precision\\Documents\\NetBeansProjects\\firstStepParser\\espania.csv", header=TRUE, sep=",")
MyData
playerA <- MyData["teamA"]
playerA
playerB <- MyData["teamB"]
playerB
max(c(max(playerA),max(playerB)))
players=c(1:max(c(max(playerA),max(playerB))))
dim(playerA)[1]
matA = matrix(0, nrow=dim(playerA)[1]*2,ncol=max(c(max(playerA),max(playerB))))
matB = matrix(0, nrow=dim(playerA)[1]*2,ncol=max(c(max(playerA),max(playerB))))
zeros = 0;
for(i in 1:max(c(max(playerA),max(playerB)))){
  playerA==i
  matA[,i]=c(playerA==i+0,playerB==i+0)
  if(sum(matA[,i])==0)
    zeros = zeros+1
  matB[,i]=c(playerB==i+0,playerA==i+0)
  
}
zeros

matAsq = t(matA)%*%matA
matAsq
points = matrix(c(unlist(MyData["A_goles"]),unlist(MyData["B_goles"])),ncol=1,nrow=2*dim(playerA)[1])
points
pointsA = t(matA)%*%points
solA <- solve(matAsq,pointsA)
pointsB = t(matB)%*%points
matbsq = t(matB)%*%matB
solB <- solve(matbsq,pointsB)

sum(!matA ==matB)
solution <- data.frame(players,solA,solB)
names(solution)<-c("player","do","recieve")
solution


write.csv(solution, file = "C:\\Users\\precision\\Documents\\NetBeansProjects\\firstStepParser\\sol_espania.csv")


