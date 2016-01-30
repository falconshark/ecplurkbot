module Filter
    def checkContent(keywordList, content)

		#從keywordList的Array裡提取關鍵字

		keywordList.each do |keyword|

			key = keyword.keys[0]

			#透過include? Function 搜尋關鍵字

			if content.include?(key)

				#若該關鍵字內有多於一個回應，生成一個隨機數，再透過此數字從回應的陣列裡取出對應的回應

				if(keyword[key].length() > 1)

					maxNumber = keyword[key].length()

					responseNumber = rand(0...maxNumber)

				else
					responseNumber = 0
				end

				response = keyword[key][responseNumber];

				return response

			end
		end
    end
end
