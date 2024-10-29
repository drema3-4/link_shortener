import os

def check_rows_file(path: str) -> list[int]:
    f = open(path, 'r', encoding='utf-8')

    row_indexes = []
    num = 1

    try: 
        line = f.readline()
        while line:
            if len(line) > 80:
                row_indexes.append(str(num))

            line = f.readline()
            num += 1
    except:
        pass
    finally:
        f.close()

        return row_indexes


def check_files_and_dirs(path: str, wrong_lines: dict) -> dict:
    files_and_dir = os.listdir(path)

    if files_and_dir:
        for elem in files_and_dir:
            if elem == 'check_string.py' or elem == 'check_string_len.txt':
                continue
            else:
                if os.path.isdir(path + elem):
                    check_files_and_dirs(path + elem + '/', wrong_lines)
                else:
                    lines = check_rows_file(path + elem)

                    if lines:
                        wrong_lines[path + elem] = ' '.join(lines)

    return wrong_lines

def save_result(path: str, wrong_lines: dict) -> None:
    f = open(path, 'w', encoding='utf-8')

    for elem in wrong_lines:
        f.write(elem + ' : ' + wrong_lines[elem] + '\n')

    f.close()

# calculate
work_dir = './'
wrong_lines = check_files_and_dirs(work_dir, dict())
save_result(work_dir + 'chech_string_len.txt', wrong_lines)