package cn.smbms.util;

public class Page {
	private int currpageNo=1;
	private int currpageSize=5;
	private int currpageCount;
	private int sumCount;
	public int getCurrpageNo() {
		return currpageNo;
	}
	public void setCurrpageNo(int currpageNo) {
		this.currpageNo = currpageNo;
		
	}
	public int getCurrpageSize() {
		return currpageSize;
	}
	public void setCurrpageSize(int currpageSize) {
		this.currpageSize = currpageSize;
	}
	public int getCurrpageCount() {
		return currpageCount;
	}
	public void setCurrpageCount(int currpageCount) {
		this.currpageCount = currpageCount;
	}
	public int getSumCount() {
		return sumCount;
	}
	public void setSumCount(int sumCount) {
		this.sumCount = sumCount;
	}
	public Page(int currpageNo, int currpageSize, int sumCount) {
		this.currpageNo = currpageNo;
		this.currpageSize = currpageSize;
		this.sumCount = sumCount;
		if(sumCount%currpageSize==0){
			this.currpageCount=sumCount/currpageSize;
		}else if(sumCount%currpageSize>0){
			this.currpageCount=(sumCount/currpageSize)+1;
		}else{
			this.currpageCount=0;
		}
	}
	

}
