import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@/context/UserProvider';
import * as S from './AddUserModal.styled';
import { faker } from '@faker-js/faker';
import { UserPlus } from 'lucide-react';
import Button from '@/components/UI/Button/Button.tsx';
import { RolesArr } from '@/types/user.ts';

interface AddUserModalProps {
  onClose: () => void;
}

const AddUserModal = ({ onClose }: AddUserModalProps) => {
  const { dispatch } = useUserContext();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    isActive: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = 'Invalid email format';
    if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!form.role) newErrors.role = 'Please select a role';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;

    if (target instanceof HTMLInputElement) {
      const { name, type, checked, value } = target;
      setForm((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    } else if (target instanceof HTMLSelectElement) {
      const { name, value } = target;
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const newUser = {
      id: faker.string.uuid(),
      name: form.name,
      email: form.email,
      role: form.role,
      isActive: form.isActive,
      createdAt: new Date().toISOString(),
      latitude: parseFloat(String(faker.location.latitude())),
      longitude: parseFloat(String(faker.location.longitude())),
    };

    dispatch({ type: 'ADD_USER', payload: newUser });
    onClose();
    navigate('/');
  };

  return (
    <S.Overlay onClick={onClose}>
      <S.Box onClick={(e) => e.stopPropagation()}>
        <S.Title>Add New User</S.Title>
        <form onSubmit={handleSubmit}>
          <S.FormItem>
            <S.Label htmlFor="name">Name</S.Label>
            <S.Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
            {errors.name && <S.ErrorMessage>{errors.name}</S.ErrorMessage>}
          </S.FormItem>

          <S.FormItem>
            <S.Label htmlFor="email">Email</S.Label>
            <S.Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />
            {errors.email && <S.ErrorMessage>{errors.email}</S.ErrorMessage>}
          </S.FormItem>

          <S.FormItem>
            <S.Label htmlFor="password">Password</S.Label>
            <S.Input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="******"
            />
            {errors.password && <S.ErrorMessage>{errors.password}</S.ErrorMessage>}
          </S.FormItem>

          <S.FormItem>
            <S.Label htmlFor="role">Role</S.Label>
            <S.Select name="role" value={form.role} onChange={handleChange}>
              <option value="">Select a role</option>
              {RolesArr.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </S.Select>
            {errors.role && <S.ErrorMessage>{errors.role}</S.ErrorMessage>}
          </S.FormItem>

          <S.FormItem>
            <S.CheckboxWrapper>
              <input
                type="checkbox"
                name="isActive"
                checked={form.isActive}
                onChange={handleChange}
              />
              Active
            </S.CheckboxWrapper>
          </S.FormItem>

          <Button type="submit">
            <UserPlus size={18} /> Submit
          </Button>
        </form>
      </S.Box>
    </S.Overlay>
  );
};

export default AddUserModal;
