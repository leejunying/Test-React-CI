// A.	Problem Solving (30’)
// ⦁	Viết một hàm nhập vào 2 mảng A1 và A2,
//đầu ra trả về một mảng mới chứa các phần tử không
//trùng nhau của hai mảng kia. Ví dụ A1 = [1, 2, "a"]; A2 = [1, 3, "b"] thì output ra được là [2, "a", "b", 3].

export function RemoveDuplicate(arr1, arr2) {
  let temp = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        temp.push(arr1[i]);
      }
    }
  }

  arr1 = arr1.concat(arr2);
  return arr1.filter((val) => temp.includes(val) == false);
}

//Viết chương trình xếp hạng rank theo số điểm các đội
//bóng đạt được trong giải đấu. Biết rằng tên của các đội bóng
//không thể trùng nhau, nếu số điểm trùng nhau thì xếp đội xếp trên
//có hiệu số bàn thắng bại (GD: Goal Difference)
//ít hơn, rồi mới xét đến Alphabet nếu 2 đội trùng cả điểm số lẫn hiệu số bàn thắng.

export function RankCLB(list) {
  let max = 0;
  let point = [];
  let result = [];
  for (let i = 0; i < list.length; i++) {
    point.push(list[i].point);
  }

  point = point.sort();

  for (let i = 0; i < point.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (point[i] == list[j].point) {
        list[j].position = point.length - i;

        result.push(list[j]);
      }
    }
  }
  return result;
}
